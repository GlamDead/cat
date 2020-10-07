import { useState, useEffect, SetStateAction, Dispatch } from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { database } from "../services/firebase"
import { ICard } from "../types/interfaces"

interface IStateCard {
  cards: ICard[]
  setCards: Dispatch<SetStateAction<ICard[]>>
  loading: boolean
}

const useCards = (): IStateCard => {
  const [cards, setCards] = useState<ICard[]>([])
  const [value, loading, error] = useCollectionData<ICard>(
    database.collection("cards").orderBy("id"),
  )

  useEffect((): void => {
    if (!loading && !error && value) {
      setCards(value)
    }

    if (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }, [value, loading, error])

  return { cards, setCards, loading }
}

export default useCards
