<template>
    <div id="header">
        <div class="headerContent">
            <div class="headerTop container">
                <div class="headerLogo">
                    <div class="logo"><img src="https://cdn.forie.com/storage/general/logo/forie-logo.svg" alt="" /></div>
                </div>
                <div class="headerInput">
                    <div class="searchInputGroup">
                        <input type="text" placeholder="Search for companies, importers or exporters, products..." />
                        <div class="btnSearch"><span class="material-icons">search</span></div>
                    </div>
                </div>
                <div class="headerAccount">
                    <div class="account">
                        <div class="accountIcon"><span class="material-icons">person</span></div>

                        <div class="accountText">
                               SIGN UP FOR FREE <span style="font-size: 12px; font-weight: 400; color: #acb6c6">or</span> SIGN IN
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="headerBottom container">
                <div class="links">
                    <nav>
                        <div><router-link to="/forimport">FOR IMPORT</router-link></div>
                        <div><router-link to="/forexport">FOR EXPORT</router-link></div>
                        <div><router-link to="/companies">COMPANIES</router-link></div>
                        <div><router-link to="/oursolutions">OUR SOLUTIONS</router-link></div>
                        <div><router-link to="/prices">PRICES</router-link></div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #nav,
.links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
#nav a,
#nav button {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 0;
    padding: 0px 16px;
    text-decoration: none;
    background: transparent;
    border: none;
}
#nav a.router-link-exact-active {
    font-style: normal;
    font-weight: 500;
    font-size: 15.78px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #a5c8ff;
    flex: none;
    order: 0;
    flex-grow: 0;
} */
#header {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 100%;
    height: 130px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    justify-content: center;
    align-items: center;
}
#header hr {
    width: 100%;
    height: 1px;
    border: 1px solid #494949;
}
.headerContent {
    width: 100%;
}
.headerTop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}
.headerInput {
    max-width: 700px;
    width: 100%;
}
.searchInputGroup {
    display: flex;
}
.searchInputGroup input {
    max-width: 700px;
    width: 100%;
    height: 50px;
    border: 1px solid #494949;
    border-right: none;
    border-radius: 8px;
    border-end-end-radius: 0px;
    border-start-end-radius: 0px;
    padding: 0px 10px;
    font-size: 16px;
    line-height: 20px;
    font-style: normal;
    font-weight: 500;
}
.searchInputGroup input::placeholder {
    font-family: inherit;
    font-size: 12px;
}

.searchInputGroup .btnSearch {
    background-color: #34c5f3;
    width: 44px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid #494949;
    border-left: none;
    box-sizing: border-box;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    cursor: pointer;
    color: #fff;
}
.headerAccount {
    background: #fff;
    width: 223px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #494949;
    border-radius: 8px;
}
.accountIcon {
    background: #34c5f3;
    width: 34px;
    height: 34px;
    border-radius: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.accountIcon span {
    font-size: 20px;
}
.account {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
}
.accountText {
    font-size: 12px;
    font-weight: 700;
    color: #161f35;
}
.headerBottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
}
.links nav {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.links nav div {
    font-size: 14px;
    line-height: 21px;
    font-style: normal;
    font-weight: 700;
}
.links nav div a {
    text-decoration: none;
    background: transparent;
    border: none;
    color: #364153;
}
</style>
