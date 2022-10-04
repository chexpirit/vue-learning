import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default{

    components: {AssignmentList, AssignmentCreate},
    template: `
        <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>

       <assignment-create @add="add"></assignment-create>
`,

    data(){
        return {
            assignments:[
                {name : 'Finish Project 1', complete: false, id:1, tag: 'math'},
                {name : 'Finish Project 2', complete: false, id:2, tag: 'science'},
                {name : 'Finish Project 3', complete: false, id:3, tag: 'math'}
            ],
        }
    },
    computed: {
        completedAssignments(){
            return this.assignments.filter(assignment=>assignment.complete)
        },
        inProgressAssignments(){
            return this.assignments.filter(assignment=>!assignment.complete)
        }
     },

     created(){
        fetch('http://localhost:3001/assignments')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
     },

     methods: {
        add(name){
            
            this.assignments.push({
                name:name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
     }


}