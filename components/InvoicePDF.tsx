import config from "@/tailwind.config";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

// const AsyncReactPdf = dynamic(() => import('@react-pdf/renderer'), { ssr: false });

// The 'theme' object is your Tailwind theme config
const tw = createTw(config);

// const styles = StyleSheet.create({
//   page: { padding: 30 },
//   section: { marginBottom: 10 },
//   heading: { fontSize: 20, marginBottom: 10 },
//   text: { fontSize: 12 },
//   table: {
//     display: 'table',
//     width: 'auto',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderRightWidth: 0,
//     borderBottomWidth: 0,
//   },
//   tableRow: { flexDirection: 'row' },
//   tableColHeader: {
//     width: '25%',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//     backgroundColor: '#d3d3d3',
//   },
//   tableCol: {
//     width: '25%',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableCellHeader: { margin: 5, fontSize: 12, fontWeight: 'bold' },
//   tableCell: { margin: 5, fontSize: 12 },
// });

const styles = StyleSheet.create({
  container: {
    ...tw("p-4"),
  },
  title: {
    ...tw("text-lg font-bold mb-4"),
  },
  address: {
    ...tw("mb-4"),
  },
  details: {
    ...tw("flex justify-between mb-4"),
  },
  orderNumber: {
    ...tw("font-bold"),
  },
  invoiceDetails: {
    ...tw("font-bold"),
  },
  amount: {
    ...tw("font-bold"),
  },
  signature: {
    ...tw("mt-8"),
  },
});

export default function InvoicePDF({ data, calculations }: any) {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.title}>Invoice/Cash Memo</Text>
          <Text style={styles.title}>amazon.in Tax Invoice</Text>

          <View style={styles.address}>
            <Text>Sold By:</Text>
            <Text>Cloudtail India Private Limited</Text>
            <Text>
              Sy No. 524/1234.6, 525123456, 526/3.4,5.6,527 of Madivala village
              and Sy no 51/1
            </Text>
            <Text>of Thattanahali village, Kasaba Hobli, Anekal Taluk,</Text>
            <Text>Bangalore Urban District</Text>
            <Text>Bangalore, Karnataka, 562107</Text>
          </View>

          <Text style={styles.address}>Shipping Address.</Text>

          <View style={styles.details}>
            <Text>PAN No: AAQCS4259Q</Text>
            <Text>GST Registration No: 29AAQCS4250Q1Z6</Text>
          </View>

          <View style={styles.details}>
            <Text>Order Number:</Text>
            <Text>Invoice Number:</Text>
          </View>

          <View style={styles.details}>
            <Text>Order Date</Text>
            <Text>Invoice Details:</Text>
          </View>

          <View style={styles.details}>
            <Text>Invoice Date:</Text>
            <Text>BE font fax Tax roar</Text>
          </View>

          <View style={styles.details}>
            <Text>Description</Text>
            <Text>price</Text>
            <Text>Rate Type (Amount)</Text>
          </View>

          <View style={styles.details}>
            <Text>[One Thousand Seven Hundred And Nineteen only]</Text>
          </View>

          <Text style={styles.signature}>
            For Cloudtail India Private Limited:
          </Text>
          <Text style={styles.signature}>Authorized Signatory</Text>
        </View>
      </Page>
    </Document>
  );
}
