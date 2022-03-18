const { model, Schema } = require('mongoose');

const DOCUMENT_NAME = 'events';

const schema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    description: {
      type: Schema.Types.String,
    },
    category: {
      type: Schema.Types.String,
    },
    address: {
      type: Schema.Types.String,
    },
    createdAt: {
      type: Schema.Types.Date,
      required: true,
      default: Date.now
    },
    isVirtual: {
      type: Schema.Types.Boolean,
    },
  },
);

const EventModel = model(DOCUMENT_NAME, schema);

module.exports = EventModel;
