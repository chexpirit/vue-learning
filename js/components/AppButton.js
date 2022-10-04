export default {
    template: `
        <button 
            :class="{
                'border rounded px-5 py-2':true,
                'bg-blue-200 hover:bg-gray-400': type === 'primary',
                'bg-purple-600 hover:bg-gray-700': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'is-loading' : processing === true,
            }"
        
        :disabled="processing">
            <slot />
        </button>
    `,

    props:{
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type:Boolean,
            default:false
        }
    },

    data(){
        return{
            
        };
    }
}