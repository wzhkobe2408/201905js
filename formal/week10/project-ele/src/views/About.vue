<template>
  <div class="about content">
    <h1>This is an about page</h1>
    <el-row>
      <el-col :span="20">
        <el-table
          :border="true"
          :data="listData">
          <el-table-column
            prop="id"
            label="ID"></el-table-column>
          <el-table-column
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
            label="年龄"
            prop="age">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pager">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="用户信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as About from '../api/about'

export default {
  name: 'About',
  data () {
    return {
      listData: [],
      total: 1,
      page: 1,
      limit: 20,
      form: {
        name: '',
        age: ''
      },
      dialogFormVisible: false
    }
  },
  created () {
    this.queryData(1)
  },
  methods: {
    async queryData () {
      let { page = 1, limit = 20 } = this
      let res = await About.getList(page, limit)
      let { list, total } = res.data
      this.listData =list
      this.total = total
    },
    handleEdit (index, row) {
      console.log(index, row)
      this.form = row
      this.dialogFormVisible = true
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleCurrentChange (val) {
      this.page = val
      this.queryData()
    },
    handleSizeChange (val) {
      this.limit = val
      this.queryData()
    }
  }
}
</script>

<style>
  .pager {
    margin-top: 30px;
  }
</style>
