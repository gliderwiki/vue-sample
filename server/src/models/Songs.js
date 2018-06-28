

module.exports = (sequelize, DataTypes)  => {
    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImageUrl: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        lylics: DataTypes.TEXT,
        tab: DataTypes.TEXT
    })

    return Song
}


