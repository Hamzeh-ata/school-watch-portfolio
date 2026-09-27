import { Component, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CapabilityCard } from '../../models/capability-card.model';
import { ClassRow } from '../../models/class-row.model';
import { DashboardStat } from '../../models/dashboard-stat.model';
import { FinanceStat } from '../../models/finance-stat.model';
import { InvoiceRow } from '../../models/invoice-row.model';
import { KanbanColumn } from '../../models/kanban-column.model';
import { ModuleExtra } from '../../models/module-extra.model';
import { NavLink } from '../../models/nav-link.model';
import { PortalCard } from '../../models/portal-card.model';
import { TrustItem } from '../../models/trust-item.model';
import { WhyItem } from '../../models/why-item.model';
import { WorkflowStep } from '../../models/workflow-step.model';

@Component({
  selector: 'app-landing',
  imports: [TranslatePipe],
  templateUrl: './landing.html',
})
export class Landing implements OnInit {
  private readonly translate = inject(TranslateService);

  protected readonly currentLang = signal('en');

  protected readonly navLinks: NavLink[] = [
    { href: '#portals', labelKey: 'nav.portals' },
    { href: '#capabilities', labelKey: 'nav.capabilities' },
    { href: '#modules', labelKey: 'nav.modules' },
    { href: '#workflow', labelKey: 'nav.workflow' },
    { href: '#why-schools', labelKey: 'nav.whySchools' },
  ];

  protected readonly sidebarItems: string[] = [
    'dashboard.overview',
    'dashboard.classes',
    'dashboard.attendance',
    'dashboard.exams',
    'dashboard.finance',
    'dashboard.boarding',
  ];

  protected readonly dashboardStats: DashboardStat[] = [
    { labelKey: 'dashboard.presentToday', value: '1,184', valueClass: 'text-ui-primary-dark' },
    { labelKey: 'dashboard.attendanceLabel', value: '96.4%', valueClass: 'text-ui-success' },
    { labelKey: 'dashboard.lateArrivals', value: '23', valueClass: 'text-ui-warning' },
    { labelKey: 'dashboard.overdueFees', value: '8', valueClass: 'text-ui-danger' },
  ];

  protected readonly chartHeights: string[] = ['52%', '74%', '61%', '88%', '70%', '95%', '80%'];

  protected readonly classRows: ClassRow[] = [
    { labelKey: 'dashboard.class1', time: '08:30' },
    { labelKey: 'dashboard.class2', time: '10:15' },
    { labelKey: 'dashboard.class3', time: '12:00' },
  ];

  protected readonly announcementKeys: string[] = [
    'dashboard.announcement1',
    'dashboard.announcement2',
    'dashboard.announcement3',
  ];

  protected readonly trustItems: TrustItem[] = [
    { titleKey: 'trust.portalsTitle', bodyKey: 'trust.portalsBody' },
    { titleKey: 'trust.bilingualTitle', bodyKey: 'trust.bilingualBody' },
    { titleKey: 'trust.webTitle', bodyKey: 'trust.webBody' },
    { titleKey: 'trust.multiTitle', bodyKey: 'trust.multiBody' },
  ];

  protected readonly portalCards: PortalCard[] = [
    {
      titleKey: 'portals.parent',
      itemKeys: ['portals.parent1', 'portals.parent2'],
      dotClass: 'bg-parent',
      titleClass: 'text-parent',
      hoverClass: 'hover:border-parent/40',
    },
    {
      titleKey: 'portals.teacher',
      itemKeys: ['portals.teacher1', 'portals.teacher2'],
      dotClass: 'bg-teacher',
      titleClass: 'text-teacher',
      hoverClass: 'hover:border-teacher/40',
    },
    {
      titleKey: 'portals.student',
      itemKeys: ['portals.student1', 'portals.student2'],
      dotClass: 'bg-student',
      titleClass: 'text-student',
      hoverClass: 'hover:border-student/40',
    },
    {
      titleKey: 'portals.admin',
      itemKeys: ['portals.admin1', 'portals.admin2'],
      dotClass: 'bg-primary',
      titleClass: 'text-primary',
      hoverClass: 'hover:border-primary/40',
    },
  ];

  protected readonly capabilityCards: CapabilityCard[] = [
    { index: '01', titleKey: 'capabilities.attendance', bodyKey: 'capabilities.attendanceBody' },
    { index: '02', titleKey: 'capabilities.performance', bodyKey: 'capabilities.performanceBody' },
    { index: '03', titleKey: 'capabilities.homework', bodyKey: 'capabilities.homeworkBody' },
    { index: '04', titleKey: 'capabilities.announcements', bodyKey: 'capabilities.announcementsBody' },
    { index: '05', titleKey: 'capabilities.communication', bodyKey: 'capabilities.communicationBody' },
    { index: '06', titleKey: 'capabilities.events', bodyKey: 'capabilities.eventsBody' },
  ];

  protected readonly financePoints: string[] = [
    'modules.finance1',
    'modules.finance2',
    'modules.finance3',
  ];

  protected readonly financeStats: FinanceStat[] = [
    { labelKey: 'modules.collected', value: '92%', valueClass: 'text-ui-success' },
    { labelKey: 'modules.pending', value: '6%', valueClass: 'text-ui-warning' },
    { labelKey: 'modules.overdue', value: '2%', valueClass: 'text-ui-danger' },
  ];

  protected readonly invoiceRows: InvoiceRow[] = [
    {
      nameKey: 'modules.invoice1',
      statusKey: 'modules.statusPaid',
      statusClass: 'text-ui-success bg-ui-success/10',
    },
    {
      nameKey: 'modules.invoice2',
      statusKey: 'modules.statusPending',
      statusClass: 'text-ui-warning bg-ui-warning/10',
    },
    {
      nameKey: 'modules.invoice3',
      statusKey: 'modules.statusOverdue',
      statusClass: 'text-ui-danger bg-ui-danger/10',
    },
    {
      nameKey: 'modules.invoice4',
      statusKey: 'modules.statusScholarship',
      statusClass: 'text-ui-primary bg-ui-primary/10',
    },
  ];

  protected readonly researchPoints: string[] = [
    'modules.research1',
    'modules.research2',
    'modules.research3',
  ];

  protected readonly kanbanColumns: KanbanColumn[] = [
    {
      titleKey: 'modules.proposals',
      cards: [
        { titleKey: 'modules.cardSolar', metaKey: 'modules.milestone' },
        { titleKey: 'modules.cardRobotics', metaKey: 'modules.milestone' },
      ],
    },
    {
      titleKey: 'modules.inProgress',
      cards: [{ titleKey: 'modules.cardWater', metaKey: 'modules.milestone' }],
    },
    {
      titleKey: 'modules.delivered',
      cards: [{ titleKey: 'modules.cardMath', metaKey: 'modules.milestone' }],
    },
  ];

  protected readonly moduleExtras: ModuleExtra[] = [
    { titleKey: 'modules.boarding', bodyKey: 'modules.boardingBody' },
    { titleKey: 'modules.academic', bodyKey: 'modules.academicBody' },
    { titleKey: 'modules.people', bodyKey: 'modules.peopleBody' },
    { titleKey: 'modules.ai', bodyKey: 'modules.aiBody' },
  ];

  protected readonly workflowSteps: WorkflowStep[] = [
    { step: '1', titleKey: 'workflow.step1', bodyKey: 'workflow.step1Body' },
    { step: '2', titleKey: 'workflow.step2', bodyKey: 'workflow.step2Body' },
    { step: '3', titleKey: 'workflow.step3', bodyKey: 'workflow.step3Body' },
    { step: '4', titleKey: 'workflow.step4', bodyKey: 'workflow.step4Body' },
  ];

  protected readonly whyItems: WhyItem[] = [
    { titleKey: 'why.clarity', bodyKey: 'why.clarityBody' },
    { titleKey: 'why.security', bodyKey: 'why.securityBody' },
    { titleKey: 'why.roles', bodyKey: 'why.rolesBody' },
    { titleKey: 'why.connected', bodyKey: 'why.connectedBody' },
  ];

  ngOnInit(): void {
    this.applyLanguage('en');
  }

  protected toggleLanguage(): void {
    const next = this.currentLang() === 'en' ? 'ar' : 'en';
    this.applyLanguage(next);
  }

  private applyLanguage(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
