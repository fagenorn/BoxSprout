import Vue from "vue";

export interface ProductResponse {
  title: string;
  description: string;
  price: number;
  image: string;
}

class ProductManager {
  products = [] as ProductResponse[];

  public async getProducts(): Promise<ProductResponse[]> {
    let response = await Vue.axios.get("/products");
    this.products = response.data.data;
    return this.products;
  }
}

const productManager = new ProductManager();
export default productManager;
