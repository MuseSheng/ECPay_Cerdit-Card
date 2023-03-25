let vm = new Vue({
    el: "#container",
    data: {
        newPerson: {
            firstName: '',
            lastName: ''
        }
    },
    methods: {
        sendIdentity: async function() {
            try {
                const {data} = await axios.post('test.php', this.newPerson);
                console.log(data);
            } catch(e) {
                console.log(e);
            }
        },
        toFormData: function(obj) {
            let formData = new FormData();
            for(let key in obj) {
                formData.append(key, obj[key]);
            }
            return formData;
        }
    }
});