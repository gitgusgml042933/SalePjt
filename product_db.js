let product_db = new Map();

class Product {
    constructor(p_no, m_no, p_name, p_price, p_quantity, p_reg_date, p_mod_date) {
        this.p_no = p_no;
        this.m_no = m_no;
        this.p_name = p_name;
        this.p_price = p_price;
        this.p_quantity = p_quantity;
        this.p_reg_date = p_reg_date;
        this.p_mod_date = p_mod_date;
    }
}

let product_dummy1 = new Product('1', '1', 'A상품', '10000', '50', Date(), Date());
product_db.set('1', product_dummy1); 
let product_dummy2 = new Product('2', '2', 'B상품', '500', '100', Date(), Date());
product_db.set('2', product_dummy2); 
let product_dummy3 = new Product('3', '3', 'C상품', '15000', '20', Date(), Date());
product_db.set('3', product_dummy3); 
let product_dummy4 = new Product('4', '4', 'D상품', '20000', '10', Date(), Date());
product_db.set('4', product_dummy4); 
let product_dummy5 = new Product('5', '5', 'E상품', '30000', '30', Date(), Date());
product_db.set('5', product_dummy5); 

console.log(product_db);