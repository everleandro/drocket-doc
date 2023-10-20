
export default class Product {
    name: string
    id: string | number


    constructor(props?: Partial<Product>) {
        this.name = props?.name || ''
        this.id = props?.id || 'new'
    }
}