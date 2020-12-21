<template>
<div class="header">
    <div class="menu">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1" to="/">
            <Icon type="md-home" />
            主页
        </MenuItem>
        <MenuItem name="2" to="/golang">
            <Icon type="logo-snapchat" />
            GOLANG
        </MenuItem>
        <MenuItem name="3" to="/rust">
            <Icon type="md-rainy" />
            RUST
        </MenuItem>
        <MenuItem name="4" to="/sre">
            <Icon type="ios-people" />
            SRE
        </MenuItem>
        <MenuItem name="5" to="/algorithm">
            <Icon type="ios-rainy" />
            算法
        </MenuItem>
        <Submenu name="6">
            <template slot="title">
                <Icon type="ios-heart" />
                基础分类
            </template>
            <MenuGroup title="DB">
                <MenuItem name="6-1" to="mysql">MYSQL</MenuItem>
                <MenuItem name="6-2" to="redis">REDIS</MenuItem>
                <MenuItem name="6-3" to="mongo">MONGODB</MenuItem>
                <MenuItem name="6-4" to="devops">DEVOPS</MenuItem>
                <MenuItem name="6-5" to="k8s">K8S</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="7" to="https://github.com/lhw1116" target="_">
            <Icon type="logo-github" />
            GITHUB
        </MenuItem>
        <MenuItem name="8" to="/about">
            <Icon type="md-beer" />
            ABOUT
        </MenuItem>
    </Menu>
    </div>
    <div class="search">
        <Input search enter-button="Search" />
    </div>
</div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'dark'
            }
        }
    }
</script>

<style lang="scss">
.header {
  display: flex;
  background-color: #515a6e;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  .menu {
      margin-left: 100px;
  }
  .search {
      margin-right: 100px;
  }  
}
</style>
