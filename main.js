Vue.component('asidebar', {
    template: '#asidebar',
    data () {
      return {
        user: {
          whichpage: ''
        }
      }
    },
    methods: {
    }
  })

  new Vue ({
    el: '#app',
    data() {
        return {
            store: [],
            inputUrl:'',
            historyList: [],
            token: '20f07f91f3303b2f66ab6f61698d977d69b83d64'
        }
    },
    created() {
    },
    methods: {
        getUrl() {
            const body = {
                "url": this.inputUrl
            }
            axios.post(`https://api.pics.ee/v1/links?access_token=${this.token}&caller=client-simple&lang=zh-tw`, body)
            .then(res => {
                this.inputUrl = res.data.data.picseeUrl
                this.storeHistory(res.data.data.picseeUrl)
                this.getHistoryList()
            }) 
        },
        storeHistory(url) {
            this.store.push(url)
            localStorage.setItem('url', this.store)
        },
        getHistoryList() {
            this.historyList = localStorage.getItem('url').split(',')
            console.log(this.historyList);
        }
    },
})