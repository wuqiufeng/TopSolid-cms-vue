
<template>
  <div class="app-nav-bar">

    <div class="nav-content">
      <breadcrumb />
      <!-- 暂时放这里 -->
      <div class="right-info">
        <div class="header-search">
          <lin-search @query="onQueryChange" placeholder="请输入工作单号" ref="searchKeyword" />
        </div>
        <notify v-auth="'消息推送'" v-show="false" />
        <clear-tab></clear-tab>
        <screenfull />
        <user></user>
      </div>
    </div>
  </div>
</template>

<script>
import Notify from '@/components/notify/notify'
import Breadcrumb from './Breadcrumb'
import Screenfull from './Screenfull'
import User from './User'
import ClearTab from './ClearTab'
import LinSearch from '@/components/base/search/lin-search'

export default {
  name: 'NavBar',
  created() {},
  components: {
    Breadcrumb,
    User,
    Notify,
    Screenfull,
    ClearTab,
    LinSearch,
  },
}
</script>

<style lang="scss" scoped>
.header-search {
  margin-right: 20px
}
.app-nav-bar {
  width: 100%;
  height: $navbar-height;
  display: flex;
  align-items: center;
  .logo.js-min-logo {
    width: 64px;
    font-size: 16px;
    color: #fff;
  }
  .nav-content {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: $navbar-padding;
    .right-info {
      display: flex;
      align-items: center;
    }
  }
}
</style>
