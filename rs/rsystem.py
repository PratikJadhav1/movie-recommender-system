import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from pathlib import Path
def return_r():
    x = Path.joinpath(Path(__file__).parent, "Movie_csv.csv")
    data = pd.read_csv(x)
    data["Genere"] = data["Genere"].replace((" Action", "Actiom", "Action ", "Actoin ", "Darama", "Drama ", "horoor", "Drama,Actiom", "Story,Darama", "Comedy,horoor"), ("Action", "Action", "Action", "Action", "Drama", "Drama", "Horoor", "Drama,Action", "Story,Drama", "Comedy,Horoor"))
    data = data.drop(['Language', 'Actor', 'Actress', 'Comments'], axis=1)
    genres = data["Genere"].str.split(",")
    te = TransactionEncoder()
    genres = te.fit_transform(genres)
    genres = pd.DataFrame(genres, columns=te.columns_)
    genres = genres.astype("int")
    genres.insert(0, "Movie Name", data["Movie Name"])
    genres = genres.transpose()
    genres = genres.rename(columns=genres.iloc[0])
    genres = genres.drop(genres.index[0])
    genres = genres.astype(int)
    similar_movies = genres.corrwith(genres["Radhe"])
    similar_movies = similar_movies.sort_values(ascending=False)
    similar_movies = similar_movies.iloc[1:]
    return similar_movies.head(10)
    