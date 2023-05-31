document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY!!');

    init();
});


const init = () => {
    console.log('init() READY!!');

    registrationEvents();
}

const registrationEvents = () => {
    let regist_btn  = document.querySelector('div.submit_button input[value="상품 판매 등록"]');
    regist_btn.addEventListener('click', function() {
        console.log('registrationEvents() CALLED!');

        let customer_id = document.querySelector('div.customer_id input').value;

        if(customer_db.get(customer_id).c_id === customer_id ) {
            let customer_values = customer_db.get(customer_id)
            console.log(customer_values);
            document.querySelector('.b_c_id').innerHTML = customer_values.c_id;
            document.querySelector('.b_c_name').innerHTML = customer_values.c_name;
            document.querySelector('.b_c_mail').innerHTML = customer_values.c_mail;
            document.querySelector('.b_c_phone').innerHTML = customer_values.c_phone;
            document.querySelector('.b_c_reg_date').innerHTML = customer_values.c_reg_date;
        }

    })
    
}
