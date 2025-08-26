const sequelize = require('../db/conn');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
   Postid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagemUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hashtags: {
      type: DataTypes.JSON, 
      allowNull: true
    }
  }, {
    timestamps: true, 
    tableName: "posts"
  });

  Post.associate = (models) => {
    // Relacionamento: 1 usuário pode ter vários posts
    Post.belongsTo(models.User, { foreignKey: "userId", as: "autor" });

    // Relacionamento: 1 post pode ter várias curtidas
    Post.hasMany(models.Like, { foreignKey: "postId", as: "likes" });
  };




module.exports = Post;