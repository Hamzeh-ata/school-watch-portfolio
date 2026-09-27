export interface KanbanCard {
  titleKey: string;
  metaKey: string;
}

export interface KanbanColumn {
  titleKey: string;
  cards: KanbanCard[];
}
