<template>
  <div class="container">
    <div class="title">新增资料</div>
    <div class="wrap">
      <el-row>
        <el-col
          :lg="16"
          :md="20"
          :sm="24"
          :xs="24">
          <el-form
            :model="form"
            status-icon
            ref="form"
            label-width="100px"
            @submit.native.prevent>
            <el-form-item label="工作单号" prop="title">
              <el-input size="medium" v-model="form.title" placeholder="请填工作单号"></el-input>
            </el-form-item>
            <el-form-item label="文件上传" prop="author">
              <el-table
                :data="tableData"
                border
                :header-row-style="{height:'15px'}"
                :header-cell-style="{padding:'0px'}"
                :row-style="{height:'20px'}"
                :cell-style="{padding:'0px'}"
                >
                <el-table-column
                  prop="date"
                  label=""
                  width="180"
                  height="4">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="数据类型"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="请选择上传数据（PDF文件）">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"

                    :auto-upload=false
                    accept='.pdf'
                    >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </el-table-column>
              </el-table>
            </el-form-item>

            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import book from '@/models/book'

export default {
  data() {
    return {
      form: {
        title: '',
        author: '',
        summary: '',
        image: '',
      },
      tableData: [{
        date: '1',
        name: 'CNC程序部件图',
        address: '',
      }, {
        date: '2',
        name: '五金加工图',
        address: '',
      }, {
        date: '3',
        name: '出货编排',
        address: '',
      }, {
        date: '4',
        name: '包装数据',
        address: '',
      }, {
        date: '5',
        name: '生产工艺流程',
        address: '',
      }, {
        date: '6',
        name: '安装说明',
        address: '',
      }, {
        date: '7',
        name: '物料明细表',
        address: '',
      }, {
        date: '8',
        name: '玻璃图',
        address: '',
      }, {
        date: '9',
        name: '结构施工图',
        address: '',
      }, {
        date: '10',
        name: '历次生产档',
        address: '',
      }, {
        date: '11',
        name: 'Qc报告',
        address: '',
      }, {
        date: '12',
        name: '面单',
        address: '',
      }, {
        date: '13',
        name: '五金材料表',
        address: '',
      }, {
        date: '14',
        name: '亚加力料表',
        address: '',
      }, {
        date: '15',
        name: '布皮科表',
        address: '',
      }, {
        date: '16',
        name: '实木料表',
        address: '',
      }, {
        date: '17',
        name: '石头科表',
        address: '',
      }, {
        date: '18',
        name: '油物料表',
        address: '',
      }],
    }
  },
  methods: {
    async submitForm(formName) {
      try {
        const res = await book.addBook(this.form)
        if (res.error_code === 0) {
          this.$message.success(`${res.msg}`)
          this.resetForm(formName)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;
    border-bottom: 1px solid #dae1ec;
  }

  .wrap {
    padding: 10px;

    .el-row{
      .el-col{
        .el-form{
          .el-form-item{
            margin-bottom: 0px !important;
          }
        }
      }
    }
  }

  .submit {
    float: left;
  }
}


</style>
