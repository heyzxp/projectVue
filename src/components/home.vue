<template>
  <el-container class="box">
    <el-header class="header">
      <el-row>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <img src="@/assets/logo.png">
          </div>
        </el-col>
        <el-col :span="18" class="header_center">
          <div class="grid-content bg-purple-light">
            <h2>电商后台管理系统</h2>
          </div>
        </el-col>
        <el-col :span="1" class="header_right">
          <div class="grid-content bg-purple">
            <a>退出</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="left">
        <el-menu unique-opened default-active="2">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-success"></i>
              用户列表
            </el-menu-item>
          </el-submenu>

          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-success"></i>
              角色列表
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class="el-icon-success"></i>
              权限列表
            </el-menu-item>
          </el-submenu>

          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-success"></i>
              商品列表
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-success"></i>
              分类参数
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-success"></i>
              商品分类
            </el-menu-item>
          </el-submenu>

          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-success"></i>
              订单列表
            </el-menu-item>
          </el-submenu>

          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-3">
              <i class="el-icon-success"></i>
              数据报表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="right">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style>
.box {
  height: 100%;
}
.header {
  background: skyblue;
  padding: 0;
}
.left {
  background: orange;
}
.right {
  background: greenyellow;
}
.header_center h2 {
  color: white;
  text-align: center;
  line-height: 60px;
}
.header_right a {
  line-height: 60px;
}
.left_nav {
  width: 100%;
}
</style>
