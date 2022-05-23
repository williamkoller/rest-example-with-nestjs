export interface DeleteProductRepository {
  delete: (_id: string) => Promise<void>;
}
