const show_template = () => {
    console.log('show_template() CALLED!!!');
    tableWrap = document.querySelector('.sell_list .sell_table tbody');

    //console.log(sale_list_db.get(0).c_id); //키값은 인덱스로 (number 형식 이여야함)

    for(let i=0; i<sale_list_db.size; i++){

        let tpl = document.querySelector('.tbody_table');
        let clone = document.importNode(tpl.content, true);

        let t_c_id = clone.querySelector('.b_c_id');
        let t_c_name = clone.querySelector('.b_c_name');
        let t_c_mail = clone.querySelector('.b_c_mail');
        let t_c_phone = clone.querySelector('.b_c_phone');
        let t_c_reg_date = clone.querySelector('.b_c_reg_date');
        let t_p_no = clone.querySelector('.b_p_no');
        let t_p_name = clone.querySelector('.b_p_name');
        let t_p_price = clone.querySelector('.b_p_price');
        let t_p_quantity = clone.querySelector('.b_p_quantity');
        let t_p_reg_dates = clone.querySelector('.b_p_reg_dates');
        let t_m_no = clone.querySelector('.b_m_no');
        let t_m_name = clone.querySelector('.b_m_name');
        let t_m_address = clone.querySelector('.b_m_address');
        let t_m_phone = clone.querySelector('.b_m_phone');
        let t_m_manager = clone.querySelector('.b_m_manager');
        let t_m_reg_date = clone.querySelector('.b_m_reg_date');
        let t_s_no = clone.querySelector('.b_s_no');
        let t_s_price = clone.querySelector('.b_s_price');
        let t_s_reg_date = clone.querySelector('.b_s_reg_date');

        let list_value = sale_list_db.get(i);
        // console.log(typeof(list_value));

        // console.log('------------------------');
        // console.log('list_value: ', list_value);
        // console.log('-----------> ', list_value.c_id);

        t_c_id.textContent = list_value.c_id;
        t_c_name.textContent = list_value.c_name;
        t_c_mail.textContent = list_value.c_mail;
        t_c_phone.textContent = list_value.c_phone;
        t_c_reg_date.textContent = list_value.c_reg_date;
        t_p_no.textContent = list_value.p_no;
        t_p_name.textContent = list_value.p_name;
        t_p_price.textContent = list_value.p_price;
        t_p_quantity.textContent = list_value.p_quantity;
        t_p_reg_dates.textContent = list_value.p_reg_dates;
        t_m_no.textContent = list_value.m_no;
        t_m_name.textContent = list_value.m_name;
        t_m_address.textContent = list_value.m_address;
        t_m_phone.textContent = list_value.m_phone;
        t_m_manager.textContent = list_value.m_manager;
        t_m_reg_date.textContent = list_value.m_reg_date;
        t_s_no.textContent = list_value.s_no;
        t_s_price.textContent = list_value.s_price;
        t_s_reg_date.textContent = list_value.s_reg_date;

        tableWrap.prepend(clone);
    }
}
