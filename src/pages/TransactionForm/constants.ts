import { FormFieldSchema } from '@medly-components/forms';

export const SCHEMA: FormFieldSchema = {
    name: {
        type: 'single-select',
        label: 'Name',
        options: [
            {
                label: 'First Name',
                value: '1'
            },
            {
                label: 'Second Name',
                value: '2'
            }
        ],
        required: true
    },
    amount: { type: 'number', label: 'Amount', required: true },
    date: { type: 'date', label: 'Date', required: true },
    transactionType: {
        type: 'radio-group',
        label: 'Transaction Type',
        options: [
            {
                label: 'Menyerahkan',
                value: 'menyerahkan'
            },
            {
                label: 'Mengambil',
                value: 'mengambil'
            },
            {
                label: 'Mengembalikan',
                value: 'mengembalikan'
            },
            {
                label: 'Meminjam',
                value: 'meminjam'
            }
        ],
        required: true
    }
};
