// ? Import dependencies from mongoose
import {Schema, model, models} from 'mongoose';

// ? Create a new schema for the Task
const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title must be less than 40 characters']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [200, 'Description must be less than 200 characters']
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Task || model('Task', taskSchema)