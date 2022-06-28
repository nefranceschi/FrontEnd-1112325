window.addEventListener('load', ()=> {

    const app = Vue.createApp({
        data(){
            return{
                users: []
            }
        },
        created() {
            
            //x.style.display = none
            if(localStorage.getItem('ls.users') == null){
                this.listUsers()
            } else {
                this.users =  JSON.parse(localStorage.getItem('ls.users'))
                console.log(this.users)
            }
        },
        methods: {
            listUsers: async function(userId){
                const response = await fetch('https://dummyapi.io/data/v1/user?limit=10',{
                    headers:{
                        'app-id':'62b6923202cfb134a70001b5'
                    }
                })
                const data = await response.json()
                this.users = await JSON.stringify(data)
                this.updateLocalStorage()
            },
            updateLocalStorage: function(){
                localStorage.setItem('ls.users', this.users)
            },
            showUser:function (userid){
                console.log(userid);
            },
            searchUser:function (){
                userId=this.findUser(document.getElementById("inputUser"))
                this.listUsers(userId);
            },
            findUser:function(userName){
                x = document.getElementById("containerProfile")
                x.style.display = '';
            }
        }
    })
    app.mount('#app')
})

