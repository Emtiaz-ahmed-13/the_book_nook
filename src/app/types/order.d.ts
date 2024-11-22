export type TOrder = {
  userId: string;
  books: Array<{
    bookId: string;
    quantity: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
};

export interface OrderResponse {
  message: string;
  success: boolean;
  data: TOrder & {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
