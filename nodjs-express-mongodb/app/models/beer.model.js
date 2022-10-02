module.exports = mongoose => {
    var schema = mongoose.Schema(
      "beer",
      mongoose.Schema(
        {
          //id: String,
          prix: String,
          marque : String,
          type : String
        },
        { timestamps: true }
      )
    );

    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Beer = mongoose.model("beer", schema)
    return Beer;
  };