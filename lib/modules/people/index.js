module.exports = {
    extend: 'apostrophe-pieces',
    name: 'person',
    label: 'Person',
    pluralLabel: 'People',
    addFields: [
        {
            name: 'title',
            label: 'Full Name',
            type: 'string',
            required: true
        },
        {
            name: 'firstName',
            label: 'First Name',
            type: 'string',
            required: true
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'string',
            required: true
        }
    ]
};