// models/Like.js
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define("Like", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: "likes"
  });

  Like.associate = (models) => {
    Like.belongsTo(models.User, { foreignKey: "userId", as: "usuario" });
    Like.belongsTo(models.Post, { foreignKey: "postId", as: "post" });
  };

};

module.exports = Like;