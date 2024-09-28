# rcnm data structure

## artists {obj}

- firstLast {obj}
  - firstName (str)
  - lastName (str)
  - instrument (str)
  - bio (str)
  - photoUrl
    - white (str)
    - red (str)
    - blue (str)
    - black (str)

## events [arr]

- seasonNumber [arr]
  - eventCode {obj}
    - eventCode (str)
    - title (str)
    - eventStageType (str)
    - datetime (str)
    - venue (str)
    - blurb (str)
    - tickets
      - urlExists (bool)
      - url (str)
    - artists [arr]
    - program [arr]
      - composerName (str)
      - workTitle (str)
      - compositionYear (int)
      - isPremiere (bool)
      - performers [arr]
    - colorTheme (str)

## venues {obj}

- venueName
  - fullName (str)
  - address (str)
  - website
    - urlExists (bool)
    - url (str)
