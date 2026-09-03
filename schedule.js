const scheduleData = [
    {
        type: "keynote",
        time: "08:45 – 09:00",
        badge: { text: "Opening", classes: "bg-brand-100 text-brand-800" },
        title: "Welcome & Introduction to the 9th RoboTac Series",
        speakers: [
            {
                image: "assets/images/organizers/Mohsen-Kaboli.jpg",
                name: "Prof. Dr. Mohsen Kaboli & Organizing Committee",
                affiliation: ""
            }
        ]
    },
    {
        type: "keynote",
        time: "09:00 – 09:45",
        badge: { text: "Keynote 1", classes: "bg-purple-100 text-purple-800" },
        title: "Scaling Tactile World Models for Embodied Autonomy",
        speakers: [
            {
                image: "assets/images/speakers/nicolas-jamali.svg", // Replace when image available
                name: "Prof. Nicolas Jamali",
                affiliation: "Meta AI"
            }
        ]
    },
    {
        type: "keynote",
        time: "09:45 – 10:30",
        badge: { text: "Keynote 2", classes: "bg-purple-100 text-purple-800" },
        title: "Generalization in Sim-to-Real Tactile Benchmarks",
        speakers: [
            {
                image: "assets/images/speakers/yuki-tanaka.svg", // Replace when image available
                name: "Prof. Yuki Tanaka",
                affiliation: "The University of Tokyo"
            }
        ]
    },
    {
        type: "break",
        time: "10:30 – 11:00",
        title: "Morning Coffee Break & Interactive Networking",
        classes: "bg-slate-100/50"
    },
    {
        type: "oral",
        time: "11:00 – 12:00",
        badge: { text: "Oral Session 1", classes: "bg-blue-100 text-blue-800" },
        title: "Contributed Papers: Active Inference, Predictive Coding & Fusion",
        speakers: [
            {
                name: "Top-rated accepted paper authors"
            }
        ]
    },
    {
        type: "break",
        time: "12:00 – 13:30",
        title: "Extended Lunch Break",
        classes: "bg-slate-100/50"
    },
    {
        type: "benchmark",
        time: "13:30 – 15:30",
        badge: { text: "Benchmark Showcase", classes: "bg-amber-500 text-slate-900" },
        title: "RoboTac 2027 Sim-to-Real Benchmark Challenge Results",
        classes: "bg-amber-50/40",
        speakers: [
            {
                name: "Live comparative policy evaluation & results from the 20 hardware-sponsored international research teams."
            }
        ]
    },
    {
        type: "oral",
        time: "15:30 – 16:30",
        badge: { text: "Posters & Demos", classes: "bg-emerald-100 text-emerald-800" },
        title: "Interactive Posters & Hardware Demonstrations",
        speakers: [
            {
                name: "Featuring DM-TacClaw live tactile execution on real robotic arms."
            }
        ]
    },
    {
        type: "keynote",
        time: "16:30 – 17:30",
        badge: { text: "Panel & Awards", classes: "bg-slate-800 text-white" },
        title: "Expert Panel: The Future of Physical Intelligence + Best Paper & Benchmark Awards",
        speakers: [
            {
                name: "Keynote speakers, committee, and benchmark winners."
            }
        ]
    }
];

function renderSchedule() {
    const container = document.getElementById('schedule-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    scheduleData.forEach(item => {
        let speakersHtml = '';
        if (item.speakers && item.speakers.length > 0) {
            speakersHtml = item.speakers.map(speaker => {
                if (speaker.image) {
                    return `
                    <div class="flex items-center gap-2 text-xs text-slate-600 font-semibold mt-2">
                        <img src="${speaker.image}" alt="${speaker.name}" class="w-8 h-8 rounded-full border border-slate-200 object-cover bg-slate-50" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'><circle cx=\\'12\\' cy=\\'8\\' r=\\'5\\'/><path d=\\'M20 21a8 8 0 0 0-16 0\\'/></svg>';">
                        <div>
                            <div>${speaker.name}</div>
                            ${speaker.affiliation ? `<div class="text-[10px] font-normal text-slate-400">${speaker.affiliation}</div>` : ''}
                        </div>
                    </div>`;
                } else {
                    return `<div class="text-xs text-slate-500 mt-1">${speaker.name}</div>`;
                }
            }).join('');
        }
        
        if (item.type === 'break') {
            container.innerHTML += `
            <div class="schedule-row break p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 ${item.classes || ''}">
                <div class="font-mono text-slate-400 font-bold w-32 shrink-0">${item.time}</div>
                <div class="flex-1 font-bold text-slate-600 text-base md:text-lg leading-tight">${item.title}</div>
            </div>`;
        } else {
            const timeColor = item.type === 'benchmark' ? 'text-amber-700' : 'text-slate-500';
            const extraClasses = item.classes || (item.type === 'keynote' && item.time.startsWith('08') ? 'bg-slate-50/50' : '');
            
            container.innerHTML += `
            <div class="schedule-row ${item.type} p-4 flex flex-col md:flex-row md:items-start md:items-center justify-between gap-4 ${extraClasses}">
                <div class="font-mono ${timeColor} font-bold w-32 shrink-0">${item.time}</div>
                <div class="flex-1 space-y-1">
                    <span class="px-2 py-0.5 ${item.badge.classes} text-[10px] font-bold rounded inline-block">${item.badge.text}</span>
                    <div class="font-bold text-slate-900 text-base md:text-lg leading-tight">${item.title}</div>
                    ${speakersHtml}
                </div>
            </div>`;
        }
    });
}
