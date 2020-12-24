import { TableColumnConfig } from '@medly-components/core';
import { FormFieldSchema } from '@medly-components/forms';

export const COLUMNS: TableColumnConfig[] = [
    { title: 'Date', field: 'transactionDate' },
    { title: 'Name', field: 'name' },
    { title: 'Transaction Type', field: 'transactionType' },
    { title: 'Amount', field: 'amount' }
];

export const SCHEMA: FormFieldSchema = {
    range: {
        displayFormat: 'yyyy-MM-dd',
        label: 'Range',
        required: true,
        type: 'date-range'
    }
};
