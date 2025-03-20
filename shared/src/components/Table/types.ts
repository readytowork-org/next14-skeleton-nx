import { TableCellProps } from '@mui/material';
import React from 'react';

export interface ActionColumns {
  actions: object;
}

export interface ColumnType<T extends object> {
  id: keyof T | 'actions';
  label: string;
  minWidth?: number;
  align?: TableCellProps['align'];
  sortable?: boolean;

  /* if no data key is provided
  id will be considered as dataKey
  */
  dataKey?: keyof T;
  type?: 'default' | 'image';
  // eslint-disable-next-line no-unused-vars
  render?: (data: T) => React.ReactNode;
}

export interface PaginationProps {
  count: number;
  rowsPerPage?: number;
  page: number;
  padding?: string;
  marginBottom?: string;
  // eslint-disable-next-line no-unused-vars
  onPageChange?: (page: number) => void;
}

export interface TableProps<T extends object> {
  columns: ColumnType<T>[];
  isLoading?: boolean;
  children?: React.ReactNode;
  pagination?: PaginationProps;
  title?: string;
  data: T[];
}
