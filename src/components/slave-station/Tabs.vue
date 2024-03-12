<template>
    <div class="fullscreen-container">
        <el-tabs type="border-card" stretch>
            <el-tab-pane label="Slave01" name="tab1">
                <!-- Tab 1 内容 -->
            </el-tab-pane>
            <el-tab-pane label="Slave02" name="tab2">
                <!-- Tab 2 内容 -->
            </el-tab-pane>
            <el-tab-pane label="Slave03" name="tab3">
                <!-- Tab 3 内容 -->
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style>
.fullscreen-container {
    height: 100vh; /* 将容器的高度设置为视窗的高度 */
    display: flex;
    flex-direction: column;
}

.el-tabs {
    flex: 1; /* 将标签页容器的 flex 属性设置为 1，使其占据剩余空间 */
}
</style>