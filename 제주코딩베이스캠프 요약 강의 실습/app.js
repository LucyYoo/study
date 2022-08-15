const root = document.getElementById('root');

        async function getProductData() {
            const response = await fetch('http://test.api.weniv.co.kr/mall')
            const product = await response.json()
            return product
        }
        getProductData().then(product => {
            const mainElement = document.createElement('main');

            mainElement.classList.add('product');

            //1(쉬운코드/ 실무에서는 innerHTML을 사용하진 않음)
            mainElement.innerHTML = `
                <h1 class="ir"> 상품목록 페이지</h1>
                <ul class="product-list"></ul>
            `;


            //2 (innerHTML이 아닌 자바스크립트만으로 작성 > 이렇게 사용하는 이유는 코드도 통일할 수 있고 모듈화하여 재사용하기도 좋다.)
            // const productPageHeader = document.createElement('h1');
            // productPageHeader.classList.add('ir');
            // productPageHeader.innerText = '상품목록 페이지';
            // mainElement.appendChild(productPageHeader);

            // const productList = document.createElement('ul');
            // productPageHeader.classList.add('prodct-list');
            // mainElement.appendChild(productList);


            const productList = mainElement.querySelector('.product-list');
            //이렇게 innderHTML로 작성한 경우 다시 변수로 빼내줘야 한다.

            product.forEach(item => {
                const productDetailLink = document.createElement('a');
                productDetailLink.href = `/detail/${item.id}`;
                productDetailLink.innerHTML = `
                <li class="product-item">
                        <div class="product-img">
                            <img src="http://test.api.weniv.co.kr/${item.thumbnailImg}">
                        </div>
                        <strong class="product-name sl-ellipsis">${item.productName}</strong>
                        <button class="like-btn"></button>
                        <div class="product-price">
                            <strong class="price m-price">${item.price}<span>원</span></strong>
                        </div>
                    </li>
                `
                productList.append(productDetailLink);
            });

            const cart = document.createElement('a');
            cart.setAttribute('class', 'link-btn cart-link');
            mainElement.append(cart);

            root.append(mainElement);
        })
