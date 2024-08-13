import mongoose, { model, models, Schema } from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const transsactionSchema = new Schema<ITransaction>(
  {
    id: {
      type: String,
      required: true,
    },
    entity: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    order_id: {
      type: String,
      required: true,
    },
    invoice_id: {
      type: String,
    },
    international: {
      type: Boolean,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    amount_refunded: {
      type: Number,
      required: true,
    },
    refund_status: {
      type: String,
    },
    captured: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    card_id: {
      type: String,
      required: true,
    },
    card: {
      id: {
        type: String,
        required: true,
      },
      entity: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        // required: true,
      },
      last4: {
        type: String,
        required: true,
      },
      network: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      issuer: {
        type: String,
      },
      international: {
        type: Boolean,
        required: true,
      },
      emi: {
        type: Boolean,
        required: true,
      },
      sub_type: {
        type: String,
        required: true,
      },
      token_iin: {
        type: String,
      },
    },
    bank: {
      type: String,
      default: 'N/A',
    },
    wallet: {
      type: String,
      default: 'N/A',
    },
    vpa: {
      type: String,
      default: 'N/A',
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    notes: {
      workshop: {
        type: String,
        required: true,
      },
    },
    fee: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    error_code: {
      type: String,
      default: 'N/A',
    },
    error_description: {
      type: String,
      default: 'N/A',
    },
    error_source: {
      type: String,
      default: 'N/A',
    },
    error_step: {
      type: String,
      default: 'N/A',
    },
    error_reason: {
      type: String,
      default: 'N/A',
    },
    acquirer_data: {
      auth_code: {
        type: String,
        required: true,
      },
    },
    created_at: {
      type: Number,
      required: true,
    },
    studentId: {
      type: ObjectId,
      ref: 'Student',
      // required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Transaction =
  models.Transaction || model<ITransaction>('Transaction', transsactionSchema);

export default Transaction;

// const PaymentDetails = {
//   id: 'pay_OjGNZh29CZFR4O',
//   entity: 'payment',
//   amount: 49900,
//   currency: 'INR',
//   status: 'captured',
//   order_id: 'order_OjGN5tIuIQ6GuZ',
//   invoice_id: null,
//   international: false,
//   method: 'card',
//   amount_refunded: 0,
//   refund_status: null,
//   captured: true,
//   description: '#OjGMxH5CCzP7It',
//   card_id: 'card_OjGNZs495uHQ1k',
//   card: {
//     id: 'card_OjGNZs495uHQ1k',
//     entity: 'card',
//     name: '',
//     last4: '1111',
//     network: 'Visa',
//     type: 'prepaid',
//     issuer: null,
//     international: false,
//     emi: false,
//     sub_type: 'consumer',
//     token_iin: null
//   },
//   bank: null,
//   wallet: null,
//   vpa: null,
//   email: 'void@razorpay.com',
//   contact: '+919999911111',
//   notes: { workshop: 'Interview Mastery Workshop' },
//   fee: 998,
//   tax: 0,
//   error_code: null,
//   error_description: null,
//   error_source: null,
//   error_step: null,
//   error_step: null,
//   error_reason: null,
//   error_reason: null,
//   acquirer_data: { auth_code: '601990' },
//   created_at: 1723307467
// }
