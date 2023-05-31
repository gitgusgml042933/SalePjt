class Customer {
    constructor(c_id, c_name, c_mail, c_phone, c_reg_date) {
        this.c_id = c_id;
        this.c_name = c_name;
        this.c_mail = c_mail;
        this.c_phone = c_phone;
        this.c_reg_date = c_reg_date;
    }
};

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

class Manufacture {
    constructor(m_no, m_name, m_address, m_phone, m_manager, m_reg_date, m_mod_date) {
        this.m_no = m_no;
        this.m_name = m_name;
        this.m_address = m_address,
        this.m_phone = m_phone;
        this.m_manager = m_manager;
        this.m_reg_date = m_reg_date;
        this.m_mod_date = m_mod_date;
    }
}