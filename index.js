

const viewProduct = () => {
    console.log('viewProduct() CALLED!!');
    
    let submit_btn = document.querySelector('div.program_regist input[name="regist"]');
    submit_btn.addEventListener('click', function() {
        console.log('submit_btn CLICKED!!');
        
        let p_no = document.querySelector('div.product_no input').value
        
        let pValue = product_db.get(p_no);
        
        document.querySelector('div.sell_list .b_p_no').innerHTML = pValue.p_no;
        document.querySelector('div.sell_list .b_p_name').innerHTML = pValue.p_name;
        document.querySelector('div.sell_list .b_p_price').innerHTML = pValue.p_price;
        document.querySelector('div.sell_list .b_p_quantity').innerHTML = pValue.p_quantity;
        document.querySelector('div.sell_list .b_p_reg_dates').innerHTML = pValue.p_reg_date;
        
    });
};

