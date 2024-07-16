'use server';
import { createReadStream, createWriteStream, mkdirSync } from 'fs';
import { Readable } from 'stream';

import {
  CreatePDFJob,
  CreatePDFParams,
  CreatePDFResult,
  DocumentLanguage,
  MimeType,
  PDFServices,
  SDKError,
  ServiceApiError,
  ServicePrincipalCredentials,
  ServiceUsageError,
} from '@adobe/pdfservices-node-sdk';

import { PDFServicesResponse } from '@adobe/pdfservices-node-sdk/lib/PDFServicesResponse';

let readStream: Readable;
export async function createPdfFromDocx() {
  try {
    // Initial setup, create credentials instance
    const credentials = new ServicePrincipalCredentials({
      clientId: process.env.ADOBE_PDF_SERVICES_CLIENT_ID!,
      clientSecret: process.env.ADOBE_PDF_SERVICES_CLIENT_SECRET!,
    });

    // Creates a PDF Services instance
    const pdfServices = new PDFServices({ credentials });

    // Creates an asset(s) from source file(s) and upload
    readStream = createReadStream('/images/certificate.docx');
    const inputAsset = await pdfServices.upload({
      readStream,
      mimeType: MimeType.DOCX,
    });

    // Create parameters for the job
    const params = new CreatePDFParams({
      documentLanguage: DocumentLanguage.EN_US,
      // createTaggedPDF: true,
    });

    // Creates a new job instance
    const job = new CreatePDFJob({ inputAsset, params });

    // Submit the job and get the job result
    const pollingURL = await pdfServices.submit({ job });
    const pdfServicesResponse: PDFServicesResponse<CreatePDFResult> =
      await pdfServices.getJobResult({
        pollingURL,
        resultType: CreatePDFResult,
      });

    if (!pdfServicesResponse.result) {
      console.log('Result asset is undefined');
      throw new Error('Result asset is undefined');
    }

    // Get content from the resulting asset(s)
    const resultAsset = pdfServicesResponse.result.asset;
    const streamAsset = await pdfServices.getContent({ asset: resultAsset });

    // Creates an output stream and copy result asset's content to it
    const outputFilePath = createOutputFilePath();
    console.log(`Saving asset at ${outputFilePath}`);

    const outputStream = createWriteStream(outputFilePath);
    streamAsset.readStream.pipe(outputStream);
  } catch (error) {
    if (
      error instanceof SDKError ||
      error instanceof ServiceUsageError ||
      error instanceof ServiceApiError
    ) {
      console.log('Exception encountered while executing operation', error);
    } else {
      console.log('Exception encountered while executing operation', error);
    }
  } finally {
    readStream.destroy();
  }
}

// Generates a string containing a directory structure and file name for the output file
function createOutputFilePath() {
  // const filePath = 'output/CreatePDFFromDOCXWithOptions/';
  const filePath = `${process.cwd()}public/certificates/`;
  const date = new Date();
  const dateString =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2) +
    'T' +
    ('0' + date.getHours()).slice(-2) +
    '-' +
    ('0' + date.getMinutes()).slice(-2) +
    '-' +
    ('0' + date.getSeconds()).slice(-2);
  mkdirSync(filePath, { recursive: true });
  return `${filePath}create${dateString}.pdf`;
}
