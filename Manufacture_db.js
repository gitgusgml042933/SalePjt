// TBL_CUSTOMER_DB START
let customer_db = new Map();

class Customer {
    constructor(c_id, c_name, c_mail, c_phone, c_rega_date) {
        this.c_id = c_id;
        this.c_name = c_name;
        this.c_mail = c_mail;
        this.c_phone = c_phone;
        this.c_rega_date = c_rega_date;
    }
};

// 더미데이터 입력
let dummyC1 = new Customer('gildong', '홍길동', 'gildong@gmail.com', '010-1234-5678', Date());
customer_db.set('gildong', dummyC1);

let dummyC2 = new Customer('chanho', '박찬호', 'chanho@naver.com', '010-9012-3456', Date());
customer_db.set('chanho', dummyC2);

let dummyC3 = new Customer('saeri', '박세리', 'saeri@daum.net', ' 010-7890-1234', Date());
customer_db.set('saeri', dummyC3);

let dummyC4 = new Customer('byeonggyu', '이병규', 'byeonggyu@gmail.com', '010-5678-9012', Date());
customer_db.set('byeonggyu', dummyC4);

let dummyC5 = new Customer('heungmin', '손흥민', 'heungmin@naver.com', '010-3456-7890', Date());
customer_db.set('heungmin', dummyC5);

// 콘솔에 테스트 확인 차 입력
console.log(customer_db);

// TBL_CUSTOMER_DB END

// TBL_MANUFACTURE_DB START
let manufacture_db = new Map();

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
};

// 더미데이터 입력
let dummyM1 = new Manufacture('1', 'A제조사', 'AAA시 aaa구 123-456', '010-1478-5236', 'A대리', Date(), Date());
manufacture_db.set('1',dummyM1);

let dummyM2 = new Manufacture('2', 'B제조사', 'BBB시 bbb구 789-123', '010-9147-8523', 'B대리', Date(), Date());
manufacture_db.set('2',dummyM2);

let dummyM3 = new Manufacture('3', 'C제조사', 'CCC시 ccc구 456-789', '010-6901-4785', 'C대리', Date(), Date());
manufacture_db.set('3',dummyM3);

let dummyM4 = new Manufacture('4', 'D제조사', 'DDD시 ddd구 120-345', '010-2369-0123', 'D대리', Date(), Date());
manufacture_db.set('4',dummyM4);

let dummyM5 = new Manufacture('5', 'E제조사', 'EEE시 eee구 678-901', '010-4782-9514', 'E대리', Date(), Date());
manufacture_db.set('5',dummyM5);

// 콘솔에 테스트 확인 차 입력
console.log(manufacture_db);

// TBL_MANUFACTURE_DB END