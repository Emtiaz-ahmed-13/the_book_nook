const formateBookData = (book: any) => ({
  _id: book._id.toString(),
  title: book.title,
  author: book.author,
  price: book.price,
  category: book.category,
  description: book.description,
  quantity: book.quantity,
  inStock: book.inStock,
  createdAt: book.createdAt,
  updatedAt: book.updatedAt,
});

// Export the function
export default formateBookData;
