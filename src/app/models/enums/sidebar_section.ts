enum SidebarSection {
    Question,
    Chat,
}

export const SidebarSectionReadable = new Map<SidebarSection, string>([
    [SidebarSection.Question, "Question"],
    [SidebarSection.Chat, "Chat"],
]);

export default SidebarSection;
