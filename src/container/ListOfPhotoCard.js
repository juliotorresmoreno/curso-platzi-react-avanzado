import { withPhotos } from '../hoc/withPhotos'
import ListOfPhotoCardsComponent from '../components/ListOfPhotoCard'

const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

export default ListOfPhotoCards
