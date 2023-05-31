const show_template = () => {
    console.log('show_template() CALLED!!!');
    tableWrap = document.querySelector('.sell_list .sell_table tbody');

    //console.log(sale_list_db.get(0).c_id); //키값은 인덱스로 (number 형식 이여야함)
    for(let i=0; i<product_db.size; i++){

        let tpl = document.querySelector('.tbody_table');
        let clone = document.importNode(tpl.content, true);

        let c_id = clone.querySelector('.b_c_id');
        let c_name = clone.querySelector('.b_c_name');
        let c_mail = clone.querySelector('.b_c_mail');
        let c_phone = clone.querySelector('.b_c_phone');
        let c_reg_date = clone.querySelector('.b_c_reg_date');
        let p_no = clone.querySelector('.b_p_no');
        let p_name = clone.querySelector('.b_p_name');
        let p_price = clone.querySelector('.b_p_price');
        let p_quantity = clone.querySelector('.b_p_quantity');
        let p_reg_dates = clone.querySelector('.b_p_reg_dates');
        let m_no = clone.querySelector('.b_m_no');
        let m_name = clone.querySelector('.b_m_name');
        let m_address = clone.querySelector('.b_m_address');
        let m_phone = clone.querySelector('.b_m_phone');
        let m_manager = clone.querySelector('.b_m_manager');
        let m_reg_date = clone.querySelector('.b_m_reg_date');
        let s_no = clone.querySelector('.b_s_no');
        let s_price = clone.querySelector('.b_s_price');
        let s_reg_date = clone.querySelector('.b_s_reg_date');

        let list_value = sale_list_db.get(i);

        c_id.textContent = list_value.c_id;
        c_name.textContent = list_value.c_name;
        c_mail.textContent = list_value.c_mail;
        c_phone.textContent = list_value.c_phone;
        c_reg_date.textContent = list_value.c_reg_date;
        p_no.textContent = list_value.p_no;
        p_name.textContent = list_value.p_name;
        p_price.textContent = list_value.p_price;
        p_quantity.textContent = list_value.p_quantity;
        p_reg_dates.textContent = list_value.p_reg_dates;
        m_no.textContent = list_value.m_no;
        m_name.textContent = list_value.m_name;
        m_address.textContent = list_value.m_address;
        m_phone.textContent = list_value.m_phone;
        m_manager.textContent = list_value.m_manager;
        m_reg_date.textContent = list_value.m_reg_date;
        s_no.textContent = list_value.s_no;
        s_price.textContent = list_value.s_price;
        s_reg_date.textContent = list_value.s_reg_date;

        tableWrap.prepend(clone);
    }
}
