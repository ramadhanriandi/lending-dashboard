import { TableColumnConfig } from '@medly-components/core';
import { FormFieldSchema } from '@medly-components/forms';

export const COLUMNS: TableColumnConfig[] = [
    { title: 'Date', field: 'date' },
    { title: 'Transaction Type', field: 'transactionType' },
    { title: 'Amount', field: 'amount' }
];

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
    }
};
