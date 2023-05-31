// TBL_CUSTOMER_DB START
let customer_db = new Map();

// 더미데이터 입력
let dummyC1 = new Customer('gildong', '홍길동', 'gildong@gmail.com', '010-1234-5678', Date());
customer_db.set('gildong', dummyC1);

let dummyC2 = new Customer('chanho', '박찬호', 'chanho@naver.com', '010-9012-3456', Date());
customer_db.set('chanho', dummyC2);

let dummyC3 = new Customer('saeri', '박세리', 'saeri@daum.net', '010-7890-1234', Date());
customer_db.set('saeri', dummyC3);

let dummyC4 = new Customer('byeonggyu', '이병규', 'byeonggyu@gmail.com', '010-5678-9012', Date());
customer_db.set('byeonggyu', dummyC4);

let dummyC5 = new Customer('heungmin', '손흥민', 'heungmin@naver.com', '010-3456-7890', Date());
customer_db.set('heungmin', dummyC5);

// 콘솔에 테스트 확인 차 입력
console.log(customer_db);

// TBL_CUSTOMER_DB END

// TBL_PRODUCT_DB START
let product_db = new Map();
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
// TBL_PRODUCT_DB END


// TBL_MANUFACTURE_DB START
let manufacture_db = new Map();


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

// TBL_ALL_LIST_DB START
let sale_list_db = new Map();

let dummy_list1 = new All_List('1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1');
let dummy_list2 = new All_List('2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2');
let dummy_list3 = new All_List('3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3');
sale_list_db.set(0,dummy_list1);
sale_list_db.set(1,dummy_list2);
sale_list_db.set(2,dummy_list3);
// TBL_ALL_LIST_DB END