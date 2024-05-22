import { calcDate } from "@/lib/utils";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

import { InvoivePDFPropType } from "@/types";

// const AsyncReactPdf = dynamic(() => import('@react-pdf/renderer'), { ssr: false });

// The 'theme' object is your Tailwind theme config
const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default function InvoicePDF({ data, calculations }: InvoivePDFPropType) {
  return (
    <>
      <Document>
        <Page style={tw("p-10 text-sm font-sans")}>
          <View style={tw("flex flex-row justify-between mb-6")}>
            <Image
              style={tw("w-48 h-24")}
              src="/invoice-logo.png"
              alt="Consulterio"
            />
            <View style={tw("text-right")}>
              <Text style={tw("font-bold")}>Sold By :</Text>
              <Text>Consultero</Text>
              <Text>Vadapalani</Text>
              <Text>Chennai.</Text>
              <Text>IN</Text>
              <Text>PAN No: XXXXXXXXX</Text>
              <Text>GST Registration No: 29XXXXXXXXX1ZY</Text>
            </View>
          </View>

          <Text style={tw("text-xl mb-4 text-center font-bold")}>
            Tax Invoice (Original for Recipient)
          </Text>

          <View style={tw("mb-4")}>
            <Text>Quotaion Number: {crypto.randomUUID()}</Text>
            <Text>Quotation Date: {calcDate(new Date())}</Text>
          </View>

          <View style={tw("mb-4")}>
            <Text style={tw("font-bold")}>Billing Address :</Text>
            <Text>{data.enquirerName}</Text>
            <Text>
              {/* Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,
              Lakshminarayana Pura, AECS Layout */}
              {data.location}
            </Text>
            {/* <Text>BENGALURU, KARNATAKA, 560037</Text> */}
            {/* <Text>IN</Text> */}
            {/* <Text>State/UT Code: 29</Text> */}
          </View>

          {/* <View style={tw("mb-4")}>
            <Text style={tw("font-bold")}>Shipping Address :</Text>
            <Text>Madhu B</Text>
            <Text>
              Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,
              Lakshminarayana Pura, AECS Layout
            </Text>
            <Text>BENGALURU, KARNATAKA, 560037</Text>
            <Text>IN</Text>
            <Text>State/UT Code: 29</Text>
            <Text>Place of supply: KARNATAKA</Text>
            <Text>Place of delivery: KARNATAKA</Text>
          </View> */}

          <View style={tw("mb-4")}>
            <View style={tw("flex flex-row border-b border-black font-bold")}>
              <Text style={tw("w-1/12 p-2")}>Sl. No</Text>
              <Text style={tw("w-7/12 p-2")}>Details</Text>
              <Text style={tw("w-2/12 p-2")}>Amount</Text>
              <Text style={tw("w-2/12 p-2")}>Total Amount</Text>
            </View>
            <View style={tw("flex flex-row border-b border-black")}>
              <Text style={tw("w-1/12 p-2")}>1</Text>
              <Text style={tw("w-7/12 p-2")}>
                {/* Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42) */}
                Monthly Salary
              </Text>
              <Text style={tw("w-2/12 p-2")}>
                {calculations.afterTaxMonthly}
              </Text>
              <Text style={tw("w-2/12 p-2")}>
                {/* ₹365.00{" "} */}
                {data.monthlySalary}
              </Text>
            </View>
            <View style={tw("flex flex-row border-b border-black")}>
              <Text style={tw("w-1/12 p-2")}>2</Text>
              <Text style={tw("w-7/12 p-2")}>
                {/* Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40) */}
                Annual Salary
              </Text>
              <Text style={tw("w-2/12 p-2")}>
                {calculations.afterTaxAnnually}
              </Text>
              <Text style={tw("w-2/12 p-2")}>{data.annualSalary}</Text>
            </View>
            <View style={tw("flex flex-row border-b border-black")}>
              <Text style={tw("w-1/12 p-2")}>3</Text>
              <Text style={tw("w-7/12 p-2")}>Commission Charges</Text>
              <Text style={tw("w-2/12 p-2")}>8.33%</Text>
              <Text style={tw("w-2/12 p-2")}>{calculations.commission}</Text>
            </View>
          </View>

          <View style={tw("flex justify-end")}>
            <Text style={tw("font-bold text-right")}>
              Total: {calculations.nettSalary}
            </Text>
          </View>

          <View style={tw("mt-4")}>
            <Text>Whether tax is payable under reverse charge - No</Text>
          </View>
        </Page>
      </Document>

      {/* <Document>
        <Page style={tw("p-10 text-sm font-sans")}>
          <View style={tw("flex flex-row justify-between mb-6")}>
            <Image
              style={tw("w-24")}
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            />
            <View style={tw("text-right")}>
              <Text style={tw("font-bold")}>Sold By :</Text>
              <Text>Varasiddhi Silk Exports</Text>
              <Text>75, 3rd Cross, Lalbagh Road</Text>
              <Text>BENGALURU, KARNATAKA, 560027</Text>
              <Text>IN</Text>
              <Text>PAN No: AACFV3325K</Text>
              <Text>GST Registration No: 29AACFV3325K1ZY</Text>
            </View>
          </View>

          <Text style={tw("text-xl mb-4 text-center font-bold")}>
            Tax Invoice/Bill of Supply/Cash Memo (Original for Recipient)
          </Text>

          <View style={tw("mb-4")}>
            <Text>Order Number: 403-3225714-7676307</Text>
            <Text>Order Date: 28.10.2019</Text>
          </View>

          <View style={tw("mb-4")}>
            <Text style={tw("font-bold")}>Billing Address :</Text>
            <Text>Madhu B</Text>
            <Text>
              Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,
              Lakshminarayana Pura, AECS Layout
            </Text>
            <Text>BENGALURU, KARNATAKA, 560037</Text>
            <Text>IN</Text>
            <Text>State/UT Code: 29</Text>
          </View>

          <View style={tw("mb-4")}>
            <Text style={tw("font-bold")}>Shipping Address :</Text>
            <Text>Madhu B</Text>
            <Text>
              Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,
              Lakshminarayana Pura, AECS Layout
            </Text>
            <Text>BENGALURU, KARNATAKA, 560037</Text>
            <Text>IN</Text>
            <Text>State/UT Code: 29</Text>
            <Text>Place of supply: KARNATAKA</Text>
            <Text>Place of delivery: KARNATAKA</Text>
          </View>

          <View style={tw("mb-4")}>
            <View style={tw("flex flex-row border-b border-black font-bold")}>
              <Text style={tw("w-1/12 p-2")}>Sl. No</Text>
              <Text style={tw("w-7/12 p-2")}>Description</Text>
              <Text style={tw("w-2/12 p-2")}>Unit Price</Text>
              <Text style={tw("w-2/12 p-2")}>Total Amount</Text>
            </View>
            <View style={tw("flex flex-row border-b border-black")}>
              <Text style={tw("w-1/12 p-2")}>1</Text>
              <Text style={tw("w-7/12 p-2")}>
                Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)
              </Text>
              <Text style={tw("w-2/12 p-2")}>&#8377; &nbsp; 338.10</Text>
              <Text style={tw("w-2/12 p-2")}>365.00</Text>
            </View>
            <View style={tw("flex flex-row border-b border-black")}>
              <Text style={tw("w-1/12 p-2")}>2</Text>
              <Text style={tw("w-7/12 p-2")}>
                Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40)
              </Text>
              <Text style={tw("w-2/12 p-2")}>₹338.10</Text>
              <Text style={tw("w-2/12 p-2")}>₹365.00</Text>
            </View>
            <View style={tw("flex flex-row border-b border-black")}>
              <Text style={tw("w-1/12 p-2")}></Text>
              <Text style={tw("w-7/12 p-2")}>Shipping Charges</Text>
              <Text style={tw("w-2/12 p-2")}>₹30.96</Text>
              <Text style={tw("w-2/12 p-2")}>₹32.50</Text>
            </View>
          </View>

          <View style={tw("flex justify-end")}>
            <Text style={tw("font-bold text-right")}>Total: ₹1,195.00</Text>
          </View>

          <View style={tw("mt-4")}>
            <Text>Whether tax is payable under reverse charge - No</Text>
          </View>
        </Page>
      </Document> */}
    </>
  );
}
