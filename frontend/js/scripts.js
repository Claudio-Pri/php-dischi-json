console.log('js collegato');

const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'php-dischi-json',
            records: []
        }
    },
    created() {
        axios
            .get('http://localhost/php-dischi-json/backend/api.php')
            .then((res) => {
                console.log(res.data);

                this.records = res.data;
            })
    }
}).mount('#app')