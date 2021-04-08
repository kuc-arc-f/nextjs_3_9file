import React from 'react'

import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import LibTest from '../libs/LibTest'
import Layout from '../components/layout'
import LibConst from '../libs/LibConst'
//
export default class extends React.Component {
  static async getInitialProps(ctx) {
    var BASE_URL = LibConst.get_config().BASE_URL
//console.log("BASE_URL=", BASE_URL)
    var url = BASE_URL + '/api/token_get'
    const res = await fetch(url)
    const json = await res.json()
    return {
      data: "",
      items: [],
      csrf: json.csrf, BASE_URL: BASE_URL,
    }
  }
  constructor(props){
    super(props)
//console.log(props )
  }
  render(){
    return (
    <Layout>
      <div className="body_main_wrap">
        <div className="container">test:
        <hr />
        </div>
      </div>
    </Layout>
    )
  }
}

