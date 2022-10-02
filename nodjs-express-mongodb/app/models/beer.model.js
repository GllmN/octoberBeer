module.exports = mongoose => {
    var schema = mongoose.Schema({
          prix: Number,
          marque : String,
          type : String
        });

    schema.method('toJSON', function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Beer = mongoose.model('beer', schema)
    return Beer;
  };