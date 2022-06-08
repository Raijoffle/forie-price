<template>
    <div class="pricesubscribe">
        <div class="credits">
            <div class="creditHead">
                <div class="creditTitle"><span>Buy Credits Or Subscribe Monthly</span></div>
                <div class="creditText">
                    <span
                        >View the export and import requests of your chosen industry with advantageous subscription packages. If you wish, buy credits
                        and dominate all sectors.</span
                    >
                </div>
            </div>
            <div class="creditContent">
                <div class="contentLeft">
                    <div class="leftHead"><span>Credit Package</span></div>
                    <hr />
                    <div class="leftContent">
                        <div class="creditPrice"><span>500 CREDIT</span><span>500$</span><span>500 CREDIT</span></div>
                        <div class="membershipInfoList">
                            <div class="membershipInfoItems">
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span>500 credits</span></div>
                                <div class="feature-list-item">
                                    <span class="material-icons"> done </span>
                                    <span>Each request is worth 10 credits, a total of 50 request viewing</span>
                                </div>
                                <div class="feature-list-item">
                                    <span class="material-icons"> done </span> <span>Credit usage is limited to 3 months</span>
                                </div>
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span>Access to past requests</span></div>
                                <div class="feature-list-item">
                                    <span class="material-icons"> done </span> <span>Company profile is not created</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="leftFooter">
                        <div class="cart">
                            <div class="addCartBtn"><span class="material-icons"> add_shopping_cart</span><span>Add to Cart</span></div>
                        </div>
                    </div>
                </div>
                <div class="contentRight">
                    <div class="rightTop"><span>Forie Subscription</span></div>
                    <hr />
                    <div class="rightBottom">
                        <div class="rbPrice">
                            <div class="rbHead"><span>3 Mounths</span><span>200$</span><span>SUBSCRIPTION PLANS 3 MOUNTH</span></div>
                            <div class="membershipInfoItems">
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span>3 months</span></div>
                                <div class="feature-list-item">
                                    <span class="material-icons"> done </span>
                                    <span> Access to requests from the start of membership </span>
                                </div>
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span>1 Sub-Sector</span></div>
                            </div>
                            <div class="cart">
                                <div class="addCartBtn"><span class="material-icons"> add_shopping_cart</span><span>Add to Cart</span></div>
                            </div>
                        </div>

                        <div class="rbPrice">
                            <div class="rbHead"><span>6 Mounths</span><span>300$</span><span>SUBSCRIPTION PLANS 6 MOUNTH</span></div>
                            <div class="membershipInfoItems">
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span> 6 months</span></div>
                                <div class="feature-list-item">
                                    <span class="material-icons"> done </span>
                                    <span>Access to requests from the start of membership</span>
                                </div>
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span>1 Sub-Sector</span></div>
                            </div>
                            <div class="cart">
                                <div class="addCartBtn"><span class="material-icons"> add_shopping_cart</span><span>Add to Cart</span></div>
                            </div>
                        </div>

                        <div class="rbPrice">
                            <div class="rbHead"><span>12 Mounths</span><span>500$</span><span>SUBSCRIPTION PLANS 1 YEARS</span></div>
                            <div class="membershipInfoItems">
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span>1 year</span></div>
                                <div class="feature-list-item">
                                    <span class="material-icons"> done </span>
                                    <span>Access to requests from the start of membership</span>
                                </div>
                                <div class="feature-list-item"><span class="material-icons"> done </span> <span> 1 Sub-Sector</span></div>
                            </div>
                            <div class="cart">
                                <div class="addCartBtn"><span class="material-icons"> add_shopping_cart</span><span>Add to Cart</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style scoped>
.credits {
    height: 868px;
    background: #00245d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
}
.creditHead {
    max-width: 1400px;
    width: 100%;
    height: 120px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.creditTitle {
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    color: #fff;
}
.creditText {
    font-size: 19.8px;
    line-height: 23px;
    font-style: normal;
    font-weight: 400;
    color: #fff;
    text-align: left;
}
.creditContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    padding: 10px;
    width: 100%;
    height: 628px;
}
.contentLeft {
    width: 435px;
    height: 628px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ebf9fe;
    padding: 40px;
}
.leftHead {
    max-width: 355px;
    height: 54px;
    width: 100%;
}
.leftHead span {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #00245d;
}
.contentLeft hr {
    width: 100%;
    /* border: 1px solid #00245d; */
}
.creditPrice {
    display: flex;
    flex-direction: column;
    height: 144px;
    width: 354px;
}
.creditPrice span:nth-child(1) {
    font-style: normal;
    font-size: 32px;
    line-height: 32px;
    font-weight: 400;
    color: #00245d;
    margin-top: 20px;
    margin-bottom: 13px;
}
.creditPrice span:nth-child(2) {
    font-style: normal;
    font-size: 38px;
    line-height: 38px;
    font-weight: 700;
    color: #00245d;
    margin-bottom: 13px;
}
.creditPrice span:nth-child(3) {
    font-style: normal;
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
    color: #364153;
}
.membershipInfoList {
    margin-top: 30px;
    width: 355px;
    height: 244px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
}
.membershipInfoList .membershipInfoItems {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
}
.membershipInfoList div span:nth-child(1) {
    color: #34c5f3;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    font-style: normal;
}
.membershipInfoList div span:nth-child(2) {
    font-style: normal;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    /* color: #0000; */
}

.addCartBtn {
    width: 138px;
    height: 44px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #00245d;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    font-style: normal;
    border-radius: 5px;
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.addCartBtn span:nth-child(1) {
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 20px;
    margin-right: 6px;
}
.addCartBtn span:nth-child(2) {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    font-style: normal;
}
.contentRight {
    width: 918px;
    height: 628px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    position: relative;
}
.contentRight hr {
    width: 100%;
}
.contentRight .rightTop {
    width: 100%;
    height: 100px;
    /* position: absolute;
    top: 0;
    left: 0; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-size: 20px;
    line-height: 23px;
    font-weight: 700;
    color: #34c5f3;
}
.rightBottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* height: 528px; */
}
.rbPrice {
    background: #fff;
    padding-bottom: 40px;
    padding-top: 9px;
    padding-right: 40px;
    padding-left: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    height: 100%;
    justify-content: space-between;
}
.rbPrice::after {
    width: 1px;
    height: calc(100% - 80px);
    margin-top: 40px;
    background-color: #dfe5ee;
    right: 0;
    top: 0;
    content: "";
    position: absolute;
}
.rbHead {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.rightTop {
    padding: 20px;
}
.rbHead span:nth-child(1) {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    color: #00245d;
    margin-top: 20px;
    margin-bottom: 10px;
}
.rbHead span:nth-child(2) {
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 38px;
    color: #00245d;
    margin-bottom: 10px;
}
.rbHead span:nth-child(3) {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #364153;
    margin-bottom: 10px;
}
.rightBottom .membershipInfoItems {
    margin-top: 30px;
    width: 218px;
    height: 226px;
}
.membershipInfoItems div span:nth-child(1) {
    color: #34c5f3;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    font-style: normal;
}
.rightBottom .membershipInfoItems div {
    margin-bottom: 20px;
}
</style>
