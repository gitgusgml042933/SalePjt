const show_template = () => {
    console.log('show_template() CALLED!!!');
    tableWrap = document.querySelector('.sell_list .sell_table tbody');

    //console.log(sale_list_db.get(0).c_id); //키값은 인덱스로 (number 형식 이여야함)
    for(let i=0; i<product_db.size; i++){

        let tpl = document.querySelector('.tbody_table');
        let clone = document.importNode(tpl.content, true);

        let c_id1 = clone.querySelector('.b_c_id');
        let c_name1 = clone.querySelector('.b_c_name');
        let c_mail1 = clone.querySelector('.b_c_mail');
        let c_phone1 = clone.querySelector('.b_c_phone');
        let c_reg_date1 = clone.querySelector('.b_c_reg_date');
        let p_no1 = clone.querySelector('.b_p_no');
        let p_name1 = clone.querySelector('.b_p_name');
        let p_price1 = clone.querySelector('.b_p_price');
        let p_quantity1 = clone.querySelector('.b_p_quantity');
        let p_reg_dates1 = clone.querySelector('.b_p_reg_dates');
        let m_no1 = clone.querySelector('.b_m_no');
        let m_name1 = clone.querySelector('.b_m_name');
        let m_address1 = clone.querySelector('.b_m_address');
        let m_phone1 = clone.querySelector('.b_m_phone');
        let m_manager1 = clone.querySelector('.b_m_manager');
        let m_reg_date1 = clone.querySelector('.b_m_reg_date');
        let s_no1 = clone.querySelector('.b_s_no');
        let s_price1 = clone.querySelector('.b_s_price');
        let s_reg_date1 = clone.querySelector('.b_s_reg_date');

        let list_value = sale_list_db.get(i);
        console.log(list_value);
        
        c_id1.textContent = list_value.c_id;
        console.log(c_id1.textContent );
        c_name1.textContent = list_value.c_name;
        c_mail1.textContent = list_value.c_mail;
        c_phone1.textContent = list_value.c_phone;
        c_reg_date1.textContent = list_value.c_reg_date;
        p_no1.textContent = list_value.p_no;
        p_name1.textContent = list_value.p_name;
        p_price1.textContent = list_value.p_price;
        p_quantity1.textContent = list_value.p_quantity;
        p_reg_dates1.textContent = list_value.p_reg_dates;
        m_no1.textContent = list_value.m_no;
        m_name1.textContent = list_value.m_name;
        m_address1.textContent = list_value.m_address;
        m_phone1.textContent = list_value.m_phone;
        m_manager1.textContent = list_value.m_manager;
        m_reg_date1.textContent = list_value.m_reg_date;
        s_no1.textContent = list_value.s_no;
        s_price1.textContent = list_value.s_price;
        s_reg_date1.textContent = list_value.s_reg_date;

        tableWrap.prepend(clone);
    }
}
